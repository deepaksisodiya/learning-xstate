import { createMachine } from 'xstate';

export const myMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOnwHsAXACXIDcwAnSAYgFkB5AVQGUBRDgDU+AJQDaABgC6iUAAdysXJVzl8skAA9EAJgCMAVhIAOAGwHTAFkunTOg9YDMjgDQgAnroCcJHV70A7IZeBgYBjpb2lgC+0W5oWHiEpNj0TKycvAJcACqSMkggCkoqahraCPo+Xl4S5joBXjZ6El5ungjGASQGxs79A856sXEgFBBwGgk4BMQaxcqq6oUVALSm7Yirvb4Sxg16el52pkcOsfEYM8lkVLQMzBDziotlK4iRm53dvYN-jhcQNMksQSKkHpBniUluVEI4DD4zEEugYvrUSHt-oMRtEgA */
  initial: 'notHovered',
  states: {
    notHovered: {
      on: {
        MOUSEOVER: {
          target: 'hovered'
        }
      }
    },
    hovered: {
      on: {
        MOUSEOUT: {
          target: 'notHovered'
        }
      }
    }
  }
});
