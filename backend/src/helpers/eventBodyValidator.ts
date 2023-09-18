import { EventStatus } from '../common/enum/EventStatus.enum';

const eventBodyValidator = (eventData) => {
  const validationErrors: string[] = [];

  if (!eventData.title || typeof eventData.title !== 'string') {
    validationErrors.push('title is required and must be a string.');
  }

  if (!eventData.status || !Object.values(EventStatus).includes(eventData.status)) {
    validationErrors.push('status is required and must be a string.');
  }

  if (!eventData.host_id || typeof eventData.host_id !== 'string') {
    validationErrors.push('host_id is required and must be a string.');
  }

  return validationErrors;
};

export default eventBodyValidator;