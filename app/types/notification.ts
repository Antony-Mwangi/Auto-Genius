export type NotificationType = "order" | "system";

export interface Notification {
  id: string;
  type: NotificationType;

  title: string;
  message: string;

  isRead: boolean;
  createdAt: string;

  orderId?: string;
}