import express from "express";
import cors from "cors";
import fetch from "node-fetch";
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // ВСТАВЬ СВОЙ WEBHOOK const WEBHOOK_URL = "ТУТ_ТВОЙ_WEBHOOK_URL"; // Заявка с CONTACT FORM app.post("/api/contact", async (req, res) => { const { name, email, message } = req.body; const payload = { content: 📩 **Новая заявка с сайта**\n **Имя:** ${name} **Email:** ${email} **Сообщение:** ${message}, }; await fetch(WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload), }); res.json({ ok: true }); }); // Заявка booking app.post("/api/book", async (req, res) => { const { name, phone, date, service } = req.body; const payload = { content: 💈 **Новая онлайн-запись**\n **Имя:** ${name} **Телефон:** ${phone} **Дата:** ${date} **Услуга:** ${service}, }; await fetch(WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload), }); res.json({ ok: true }); }); app.listen(3000, () => console.log("Server running on port 3000")); await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: fd.get("name"), email: fd.get("email"), message: fd.get("message"), }), }); await fetch("/api/book", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: fd.get("name"), phone: fd.get("phone"), date: fd.get("date"), service: fd.get("service"), }), });import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ВСТАВЬ СВОЙ WEBHOOK
const WEBHOOK_URL = "https://discord.com/api/webhooks/1442457701136466021/o-F2b1lrS7FwPM1am51XmL6hJ3fFtZ9PDjkVCPrMjxMUPl99SiwjAWEO2CBTrn7HHBff";

// Заявка с CONTACT FORM
app.post("/api/contact", async(req, res) => {
    const { name, email, message } = req.body;

    const payload = {
        content: `📩 **Новая заявка с сайта**\n
**Имя:** ${name}
**Email:** ${email}
**Сообщение:** ${message}`,
    };

    await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    res.json({ ok: true });
});

// Заявка booking
app.post("/api/book", async(req, res) => {
    const { name, phone, date, service } = req.body;

    const payload = {
        content: `💈 **Новая онлайн-запись**\n
**Имя:** ${name}
**Телефон:** ${phone}
**Дата:** ${date}
**Услуга:** ${service}`,
    };

    await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    res.json({ ok: true });
});

app.listen(3000, () => console.log("Server running on port 3000"));

await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        name: fd.get("name"),
        email: fd.get("email"),
        message: fd.get("message"),
    }),
});

await fetch("/api/book", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        name: fd.get("name"),
        phone: fd.get("phone"),
        date: fd.get("date"),
        service: fd.get("service"),
    }),
});