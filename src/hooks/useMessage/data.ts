import { messagesInitialState } from './MessagesStore/MessagesReducer';
import type {
  MessageType,
  MessagesReducerState,
} from './MessagesStore/Messagestypes';
import type { NotificationType } from './MessagesStore/useMessagesHook';

function generateMessages(): Record<NotificationType, MessagesReducerState> {
  const mappedMessages: Record<NotificationType, MessageType[]> = {
    unread: [],
    all: [],
  };

  for (let i = 1; i <= 100; i += 1) {
    const isUnread = i <= 20;

    const message: MessageType = {
      id: `message_${i}`,
      messageId: `message_id_${i}`,
      created: new Date().toISOString(),
      read: !isUnread,
      tags: ['all'],
      content: {
        title: `Message ${i}`,
        body: `This is the body of message ${i}`,
        trackingIds: {
          unreadTrackingId: isUnread ? `unread_${i}` : undefined,
        },
      },
    };

    mappedMessages.all.push(message);

    if (isUnread) {
      mappedMessages.unread.push(message);
    }
  }

  return {
    all: {
      ...messagesInitialState,
      messages: mappedMessages.all,
      messageCount: mappedMessages.all.length,
    },
    unread: {
      ...messagesInitialState,
      messages: mappedMessages.unread,
      messageCount: mappedMessages.unread.length,
    },
  };
}

export const dummyMessages = generateMessages();
