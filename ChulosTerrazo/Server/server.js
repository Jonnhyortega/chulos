import express from "express";
import cors from "cors";
import { MercadoPagoConfig, Preference } from "mercadopago";
import dotenv from "dotenv";
dotenv.config();
const ACCESS_TOKEN = process.env.MERCADO_PAGO_ACCESS_TOKEN;
const client = new MercadoPagoConfig({
  accessToken: ACCESS_TOKEN,
});

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h2>Hola soy el servidor del chulito</h2>");
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
        success: "https://chulitos.vercel.app/thankyou",
        failure: "https://chulitos.vercel.app",
        pending: "https://chulitos.vercel.app",
      },
      auto_return: "approved",
    };
    const preference = new Preference(client);
    const result = await preference.create({ body });
    res.json({ id: result.id });
  } catch (error) {
    console.error("Error al crear preferencia:", error);
    console.log(ACCESS_TOKEN);
    res.status(500).json({
      error: "Error al crear la preferencia :(",
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
