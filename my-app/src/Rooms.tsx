import React, { useState, useEffect, useRef } from 'react';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/client';

export const Rooms = () => {
    const [ page, setPage ] = useState(1);
    const [ rooms, setRooms ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const { data, loading: queryLoading, error: queryError } = useQuery(QUERY, {
        variables: {
            page,
        },
    });

    useEffect(() => {
        if (data && data.rooms) {
            setRooms(data.rooms);
        }
    }, [data]);

    if(loading) {
        return <div>loading</div>
    }

    if (error) {
        return <div>error</div>
    }

    return (
        <div>
            <h1>Rooms</h1>
            <ul>
                {rooms.map((room: {name : string}) => (
                    <li key={room.name}>{room.name}</li>
                ))}
            </ul>
        </div>
    );
};




const QUERY = gql`
    query Rooms($page: Int!) {
        rooms(page: $page) {
            name
        }
    }
`;
