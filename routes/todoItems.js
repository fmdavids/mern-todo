const router = require("express").Router();

// const { findByIdAndUpdate } = require("../models/todoItems");
// to create  todo model
const todoItemsModels = require("../models/todoItems");

router.post("/api/item", async (req, res) => {
  try {
    // const newItem = new todoItemsModels({
    //     item: req.body.item
    // })

    const newItem = await todoItemsModels.create({ item: req.body.item });

    const saveItem = await newItem.save();

    res
      .status(200)
    //   .json({ success: true, msg: `Item added successfully`, data: saveItem ); // WHEN I HAVE THIS , I HAVE TO REFRESH BEFORE IT ADDS TO THE LIST
      .json(saveItem);
  } catch (err) {
    res.json(err);
  }
});

router.get("/api/items", async (req, res) =>{
    try{
        const allTodoItems = await todoItemsModels.find({})
        res.status(200).json(allTodoItems)
    }catch(err){
        res.json(err)
    }
})
router.put("/api/item/:id", async (req, res) =>{
    try{
        const updateTodoItem = await todoItemsModels.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json("Item has been updated")
    }catch(err){
        res.json(err)
    }
})
router.delete("/api/remove/:id", async (req, res) =>{
    try{
        const deleteTodoItem = await todoItemsModels.findByIdAndRemove(req.params.id);
        res.status(200).json("Item has been Removed successfully")
    }catch(err){
        res.json(err)
    }
})






module.exports = router;
