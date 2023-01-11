import React, { useState } from 'react';
import styled from 'styled-components';
import { Room } from './Room';
import { Rooms } from './Rooms';
import { Sidebar } from './components/sidebar';
import { RoomContainer } from './components/room';

const Input = styled.div`
    padding: 4px;
    margin: 0 0 4px;

    input {
        border: 1px solid #ccc;
        padding: 2px;
        font-size: 14px;
    }
`;

export const App = () => {
    const [name, setName] = useState('tester');
    const [channel, setChannel] = useState('#gophers');

    return (
            <>
            <Sidebar>
                <Rooms/>
            </Sidebar>
            <RoomContainer>
                <Input>
                    name: <input value={name} onChange={(e) => setName(e.target.value)} />
                </Input>
                <Input>
                    channel: <input value={channel} onChange={(e) => setChannel(e.target.value)} />
                </Input>
                <Room channel={channel} name={name} />
            </RoomContainer>
            </>
            );

};

