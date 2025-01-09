import { createMachine } from 'xstate';

export const machine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBcD2FWwAQEMAOeAdADao4QCWAdlFmhrAMT2ZanmQDaADALqKg8mCsgqoqAkAA9EARgCcAFkIAObooBsKgOwBWADQgAnohWzCugL6XDLbPiLtKNOukyMn1WnawAzHBTEXHySQrAiYhJI0oh6hIqKOtqyGty6WhoATADMhiYIsorcFtY2IFTocJI+DqHCouKSMggAtBp5iG2E3D3cspkKerrDmda2bvYEJGTO3hN14Q1RoM2KmR0IKirxKRp7+wfaYyA1Uz5OkAsRjdGrPRYbKqNlp44zXq4MWGAATj+oPyuSyaiCKxQMxjkRRKpSAA */
  id: 'todos app',
  initial: 'loading todos',
  states: {
    'loading todos': {
      on: {
        'todos loaded': {
          target: 'todos loaded'
        },
        'loading todos error': {
          target: 'loading todos error'
        }
      }
    },
    'todos loaded': {},
    'loading todos error': {}
  }
});
