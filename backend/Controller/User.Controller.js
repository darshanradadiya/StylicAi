// filepath: d:\StylicAi\backend\Controller\User.Controller.js
export const getUsers = (req, res) => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];
  res.json(users);
};