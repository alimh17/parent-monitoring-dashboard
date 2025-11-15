type EventCallback = (data?: any) => void;

export class AppCoordinator {
  private static instance: AppCoordinator;
  private listeners: Map<string, EventCallback[]> = new Map();

  static getInstance(): AppCoordinator {
    if (!AppCoordinator.instance) {
      AppCoordinator.instance = new AppCoordinator();
    }
    return AppCoordinator.instance;
  }

  publish(event: string, data?: any): void {
    console.log(`📢 Publishing event: ${event}`, data);
    const eventListeners = this.listeners.get(event);
    if (eventListeners) {
      eventListeners.forEach((listener) => {
        try {
          listener(data);
        } catch (error) {
          console.error(`Error in event listener for ${event}:`, error);
        }
      });
    }
  }

  subscribe(event: string, callback: EventCallback): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)!.push(callback);
    console.log(`🎯 Subscribed to event: ${event}`);

    // Return unsubscribe function
    return () => this.unsubscribe(event, callback);
  }

  unsubscribe(event: string, callback: EventCallback): void {
    const eventListeners = this.listeners.get(event);
    if (eventListeners) {
      this.listeners.set(
        event,
        eventListeners.filter((listener) => listener !== callback)
      );
    }
  }
}

// Event Types
export const EVENTS = {
  LANGUAGE_CHANGED: "languageChanged",
  THEME_CHANGED: "themeChanged",
  NOTIFICATION: "notification",
} as const;
