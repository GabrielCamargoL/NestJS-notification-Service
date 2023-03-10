import { Content } from "../entities/content";
import { Notification } from "../entities/notification";

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationReponse {
  notification: Notification
}

export class SendNotification {
  async execute(
    request: SendNotificationRequest
  ): Promise<SendNotificationReponse> {
    const { recipientId, category, content } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    return {
      notification,
    }
  }
}