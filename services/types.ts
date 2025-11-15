export interface Device {
  id: string;
  name: string;
  type: "phone" | "tablet" | "laptop";
  status: "online" | "offline";
  lastActive: Date;
}

export interface NotificationData {
  type: "success" | "warning" | "error" | "info";
  title: string;
  message: string;
  duration?: number;
}
