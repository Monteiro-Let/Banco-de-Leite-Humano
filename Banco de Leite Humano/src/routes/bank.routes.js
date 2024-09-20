import { Router } from "express";
import { createBanks, deleteBanks, getAllBanks, searchBank, updateBanks, getBanksByState } from "../controllers/bank.controllers.js";

const bankRoutes = Router();

bankRoutes.get("/banks", (req,res) => {
    const listbanks = getAllBanks();
    res.status(200).json({listbanks});
});


bankRoutes.get("/banks/state/:state", (req, res) => {
    const { state } = req.params;
    const banks = getBanksByState(state);
    if (!banks.length) {
        return res.status(404).json({ message: "No banks found in this state" });
    }
    res.status(200).json({ banks });
});



bankRoutes.get("/bank", (req, res) => {
    const bankName = req.query.bankName;
    if (!bankName) {
        return res.status(400).json({ message: "Bank name is required" });
    }
    const searchBanks = searchBank(bankName);
    if (!searchBanks) {
        return res.status(404).json({ message: "Bank not found" });
    }
    res.status(200).json({ searchBanks });
});


bankRoutes.post("/banks", (req,res) => {
    const {state, local, bank, adress, phone, email } = req.body;
    const newBank = createBanks(state, local, bank, adress, phone, email);   
    res.status(201).json({newBank});
});

bankRoutes.patch("/banks", (req,res) => {
    const { id, email } = req.body;
    const bankUpdate = updateBanks(id, email);
    res.status(200).json({bankUpdate});
})


bankRoutes.delete("/bank/:id", (req,res) => {
    const { id } = req.params; 
    const bank = deleteBanks(id);
    res.status(200).json({bank});
})


export {bankRoutes};












