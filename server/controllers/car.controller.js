import Car from "../models/Car.js";

export const getCars = async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
};

export const getCarById = async (req, res) => {
  const car = await Car.findById(req.params.id);
  res.json(car);
};

export const addCar = async (req, res) => {
  try {
    const car = new Car(req.body);
    await car.save();
    res.status(201).json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCar = async (req, res) => {
  try {
    await Car.findByIdAndDelete(req.params.id);
    res.json({ message: "Car deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCar = async (req, res) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedCar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
