import { createClient, ClientOptions } from 'graphql-ws';
import { print } from 'graphql';
import { ApolloLink, Observable, Operation, NextLink, FetchResult } from '@apollo/client';

export class WebSocketLink extends ApolloLink {
  client;

  constructor(options : ClientOptions<Record<string, unknown> | undefined>) {
    super();
    this.client = createClient(options);
  }

  request(operation: Operation, forward?: NextLink): Observable<FetchResult> | null {
    return new Observable((sink) => {
      return this.client.subscribe(
        { ...operation, query: print(operation.query) },
        {
          next: sink.next.bind(sink),
          complete: sink.complete.bind(sink),
          error: (err : any) => {
            if (err instanceof Error) {
              return sink.error(err);
            }

            if (err instanceof CloseEvent) {
              return sink.error(
                // reason will be available on clean closes
                new Error(
                  `Socket closed with event ${err.code} ${err.reason || ''}`,
                ),
              );
            }

            if(err instanceof Array){
              return sink.error(
                new Error(
                  err
                    .map(({ message }) => message)
                    .join(', '),
                ),
              );
            }
             
            return null;
          },
        },
      );
    });
  }
}