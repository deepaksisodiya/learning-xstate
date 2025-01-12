import { setup, fromPromise, assign } from 'xstate';

const fetchUser = (userId: string) => {
  return {
    name: 'Deepak',
    userId
  };
};

export const userMachine = setup({
  types: {
    context: {} as {
      userId: string;
      user: object | undefined;
      error: unknown;
    }
  },
  actors: {
    fetchUser: fromPromise(async ({ input }) => {
      const user = await fetchUser(input.userId);

      return user;
    })
  }
}).createMachine({
  id: 'user',
  initial: 'idle',
  context: {
    userId: '42',
    user: undefined,
    error: undefined
  },
  states: {
    idle: {
      on: {
        FETCH: { target: 'loading' }
      }
    },
    loading: {
      invoke: {
        id: 'getUser',
        src: 'fetchUser',
        input: ({ context: { userId } }) => ({ userId }),
        onDone: {
          target: 'success',
          actions: assign({ user: ({ event }) => event.output })
        },
        onError: {
          target: 'failure',
          actions: assign({ error: ({ event }) => event.error })
        }
      }
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: 'loading' }
      }
    }
  }
});
