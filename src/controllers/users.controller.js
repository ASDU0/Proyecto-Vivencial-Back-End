const UserModel = require("../models/users.model");
const handleError = require("../utils/handle.error");

const getUsers = async (req, res) => {
  try {
    const data = await UserModel.find({});
    res.send({ data, message: "ok" })
  } catch (err) {
    handleError(res, "ERROR_GET_USERS")
  }
}
const getUser = async (req, res) => {
  try {
    const id = req.params.id
    const data = await UserModel.findById(id);
    res.send({ data, message: "ok" })
  } catch (err) {
    handleError(res, "ERROR_GET_USER")
  }
}
const createUser = async (req, res) => {
  try {
    const body = req.body;
    const data = await UserModel.create(body);
    res.send({ data, message: "ok" })
  } catch (err) {
    handleError(res, "ERROR_CREATED_USER")
  }
}

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    await UserModel.findOneAndUpdate({ _id: id }, body);
    const data = await UserModel.findById(id);
    res.send({ data, message: "ok" })
  } catch (err) {
    handleError(res, "ERROR_UPDATE_USER")
  }
}

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await UserModel.deleteOne({ _id: id });
    res.send({ data, message: "ok" })
  } catch (err) {
    handleError(res, "ERROR_DELETE_USER")
  }
}
module.exports = { getUser, getUsers, createUser, updateUser, deleteUser }