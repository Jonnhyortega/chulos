import express from "express";
import cors from "cors";
import { MercadoPagoConfig, Preference } from "mercadopago";

const ACCESS_TOKEN =
  "APP_USR-2775179814509131-101010-fe98bbb7952fc2b4037b69369674dbe8-2026224945";

const client = new MercadoPagoConfig({
  accessToken: ACCESS_TOKEN,
});

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Soy el server de chulitosdesign :D");
});

app.post("/create_preference", async (req, res) => {
  try {
    const body = {
      items: [
        {
          title: req.body.title,
          quantity: Number(req.body.quantity),
          unit_price: Number(req.body.price),
          currency_id: "ARS",
        },
      ],
      back_urls: {
        success: "https://www.youtube.com/",
        failure: "https://www.youtube.com/",
        pending: "https://www.youtube.com/",
      },
      auto_return: "approved",
    };
    const preference = new Preference(client);
    const result = await preference.create({ body });
    res.json({ id: result.id });
  } catch (error) {
    console.error("Error al crear preferencia:", error);
    res.status(500).json({
      error: "Error al crear la preferencia :(",
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
