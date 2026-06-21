"use client";

import { useNotifications } from "@/app/hooks/useNotifications";
import { markAsRead } from "@/app/lib/notifications";

export default function NotificationsPanel() {
  const { notifications } = useNotifications();

  return (
    <div className="bg-[#121821] border border-white/10 rounded-xl p-6">
      <h2 className="text-xl font-bold text-orange-400 mb-4">
        🔔 Notifications
      </h2>

      {notifications.length === 0 ? (
        <p className="text-gray-400">No notifications</p>
      ) : (
        <div className="space-y-3">
          {notifications.map((n) => (
            <div
              key={n.id}
              className={`p-4 rounded-lg border ${
                n.isRead
                  ? "border-white/10 bg-white/5"
                  : "border-orange-500/30 bg-orange-500/10"
              }`}
            >
              <p className="font-semibold">{n.title}</p>
              <p className="text-sm text-gray-300">{n.message}</p>

              <button
                onClick={() => markAsRead(n.id)}
                className="mt-2 text-xs text-orange-400 hover:underline"
              >
                Mark as read
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}