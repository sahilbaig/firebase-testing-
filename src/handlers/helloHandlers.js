export const helloWorldHandler = (req, res) => {
    res.send("Hello, World!");
};
export const greetUserHandler = (req, res) => {
    const { name } = req.params;
    res.send(`Hello, ${name}!`);
};
