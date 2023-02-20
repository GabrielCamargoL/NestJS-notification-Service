import { SendNotification } from "../use-cases/send-notification"

describe('Send Notification', () => {
  it('Should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      recipientId: 'example-recipient-id',
      category: 'social',
      content: 'This is a notification'
    });

    expect(notification).toBeTruthy();
  })
})