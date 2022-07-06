import {
  GraphQLRequestContext,
  GraphQLRequestContextWillSendResponse,
  GraphQLRequestListener,
} from 'apollo-server-plugin-base';
import { GraphQLContext } from '@/main/api/gql/context';

export const ResponseExtensionsPlugin = {
  async requestDidStart(
    _requestContext: GraphQLRequestContext<GraphQLContext>,
  ): Promise<void | GraphQLRequestListener<GraphQLContext>> {
    return {
      async willSendResponse(willSendResponseContext: GraphQLRequestContextWillSendResponse<GraphQLContext>) {
        if (willSendResponseContext.response.errors) {
          willSendResponseContext.response.extensions = {
            ...willSendResponseContext.response.extensions,
            uuid: willSendResponseContext?.context?.uuid,
          };
        }
      },
    };
  },
};
