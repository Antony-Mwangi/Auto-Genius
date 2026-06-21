"use client";

import { useEffect, useState } from "react";
import { Notification } from "@/app/types/notification";
import { getNotifications } from "@/app/lib/notifications";

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const load = () => {
      setNotifications(getNotifications());
    };

    load();

    // 🔥 LIVE updates (cross-tab + same-tab hack)
    const interval = setInterval(load, 2000);

    window.addEventListener("storage", load);

    return () => {
      clearInterval(interval);
      window.removeEventListener("storage", load);
    };
  }, []);

  return { notifications };
}