const { Router } = require("express");
const ContractController = require("../controllers/ContractController");
const { ResourceNotFound } = require("../errors");

const router = Router();

router.get("/:id?", async (req, res, next) => {
  const { id } = req.params;
  const { supplier, user, date } = req.query;

  try {
    const dbContracts = id
      ? await ContractController.findById(id) // buscamos contract por id
      : supplier
      ? await ContractController.findBySupplier(supplier) // buscamos contract por supplier id
      : user
      ? await ContractController.findByUser(user) // buscamos contract por user id
      : await ContractController.find(date); // buscamos todos por fecha

    if (!dbContracts)
      // no se encontraron contracts
      return res.status(404).json({ error: "No hubo resultados" });

    return res.status(200).json(dbContracts);
  } catch (error) {
    console.error("GET /contracts ContractController error");

    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const { date, SupplierServiceId, UserId, status } = req.body;

  if (!date || !SupplierServiceId || !UserId)
    return res
      .status(400)
      .json({ error: "Faltan datos obligatorios por cargar" });

  const newContract = { date, SupplierServiceId, UserId, status };

  try {
    const dbContract = await ContractController.add(newContract);

    return res.status(201).json(dbContract);
  } catch (error) {
    if (error instanceof ResourceNotFound)
      return res.status(400).json({ error: `${error.data.model} inexistente` });

    console.error("POST /contracts ContractController.add error");

    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { date, SupplierServiceId, UserId, status } = req.body;

  if (!id) return res.status(400).send();
  if (!date && !SupplierServiceId && !UserId && !status)
    return res
      .status(400)
      .json({ error: "Faltan datos obligatorios por cargar" });

  const dataContract = { date, SupplierServiceId, UserId, status };

  try {
    const dbContract = await ContractController.update(id, dataContract);

    return res.status(200).json(dbContract);
  } catch (error) {
    if (error instanceof ResourceNotFound)
      return res.status(404).json({ error: `${error.data.model} inexistente` });

    console.error("PUT /contracts ContractController.update error");

    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;

  if (!id) return res.status(400).send();

  try {
    await ContractController.remove(id);

    return res.status(200).send();
  } catch (error) {
    if (error instanceof ResourceNotFound)
      return res.status(404).json({ error: `${error.data.model} inexistente` });

    console.error("DELETE /contracts ContractController.remove error");

    next(error);
  }
});

module.exports = router;
