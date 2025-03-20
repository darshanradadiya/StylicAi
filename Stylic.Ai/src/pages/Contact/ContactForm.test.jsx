import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

describe("ContactForm", () => {
  test("renders the form fields", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/Your Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contact Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  });

  test("shows error when submitting empty form", () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByText(/Submit/i));
    expect(screen.getByText(/All fields are required/i)).toBeInTheDocument();
  });

  test("submits the form with valid data", async () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText(/Your Name/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/Your Email/i), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByLabelText(/Contact Number/i), { target: { value: "1234567890" } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: "Hello!" } });
    fireEvent.click(screen.getByText(/Submit/i));
    expect(await screen.findByText(/Form Submitted Successfully/i)).toBeInTheDocument();
  });
});