import { Device } from "../services/types";

const mockDevices: Device[] = [
  {
    id: "1",
    name: "iPhone 13",
    type: "phone",
    status: "online",
    lastActive: new Date(),
  },
  {
    id: "2",
    name: "Samsung Tablet",
    type: "tablet",
    status: "offline",
    lastActive: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
];

const successNotification = {
  type: "success",
  title: "Data Loaded",
  message: "Devices data loaded successfully",
};

const errorNotification = {
  type: "error",
  title: "Error",
  message: "Failed to load devices data",
};



export { mockDevices, successNotification, errorNotification };
