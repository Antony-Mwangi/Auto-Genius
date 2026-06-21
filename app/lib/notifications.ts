import { Notification } from "@/app/types/notification";

const KEY = "notifications";

// get all notifications
export const getNotifications = (): Notification[] => {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(KEY) || "[]");
};

// save notifications
export const saveNotifications = (items: Notification[]) => {
  localStorage.setItem(KEY, JSON.stringify(items));
};

// add notification
export const addNotification = (notification: Notification) => {
  const existing = getNotifications();
  existing.unshift(notification);
  saveNotifications(existing);
};

// mark as read
export const markAsRead = (id: string) => {
  const updated = getNotifications().map((n) =>
    n.id === id ? { ...n, isRead: true } : n
  );

  saveNotifications(updated);
};