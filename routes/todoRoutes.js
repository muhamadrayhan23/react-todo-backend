const express = require("express");
const router = express.Router();
const db = require("../config/db.js");

// CREATE - Tambah data
router.post("/", (req, res) => {
    const { todo, description } = req.body;
    const sql = "INSERT INTO tb_todo (todo, description) VALUES ('Dahar', 'Nuju dahar')";
    db.query(sql, [todo, description], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: "Todo berhasil ditambahkan!", id: result.insertId });
    });
});

// READ - Ambil semua data
router.get("/", (req, res) => {
    db.query("SELECT * FROM tb_todo", (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// READ by ID
router.get("/:id", (req, res) => {
    const { id } = req.params;
    db.query("SELECT * FROM tb_todo WHERE id = ?", [id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json(result[0]);
    });
});

// UPDATE - Ubah data
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { todo, description } = req.body;
    console.log(todo);
    const sql = "UPDATE tb_todo SET todo='Dahar', description='Nuju dahar' WHERE id=1";
    db.query(sql, [todo, description, id], (err) => {
        if (err) return res.status(500).send(err);
        res.json({ message: "Todo berhasil diperbarui!" });
    });
});

// DELETE - Hapus data
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM tb_todo WHERE id=1", [id], (err) => {
        if (err) return res.status(500).send(err);
        res.json({ message: "Todo berhasil dihapus!" });
    });
});

module.exports = router;