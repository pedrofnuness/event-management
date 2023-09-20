'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/Button/Button';
import Input from '@/app/components/Input/Input';
import Dropdown from '@/app/components/Dropdown/Dropdown';
import * as Styled from './createPageStyles';
import { HostInterface } from '@/interfaces/Host.interface';

export default function CreatePage() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [host, setHost] = useState<HostInterface>({
    id: "",
    name: "",
    avatar: "",
    description: ""
  });
  const [hostList, setHostList] = useState<HostInterface[]>([]);

  const router = useRouter();

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const onChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setDate(event.target.value);
  };

  const handleBackClick = () => {
    return router.back();
  };

  const handleCreateNewEvent = async () => {
    const eventData = {
      title: title || "Brand new event mock",
      date: date || null,
      host_id: host.id || hostList[0].id
    };

    // TODO: Loading

    try {
      await fetch('http://localhost:4000/event', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(eventData),
      })

      router.push('/');
    } catch (err) {
      throw new Error(`Error to create a new event: ${err}`)
      // TODO: Error Handling
    }
  };

  useEffect(() => {
    const fetchHosts = async () => {
      try {
        const response = await fetch('http://localhost:4000/hosts');
        const parsedResponse = await response.json();
        setHostList(parsedResponse);
      } catch (err) {
        console.log("Error ==", err)
        return null;
      }
    };

    fetchHosts();

    return () => {};
  }, []);

  return (
    <Styled.Container>
      <Styled.Title>Create new event</Styled.Title>

      <Styled.FormContainer>
        <Input
          value={title}
          onChange={onChangeTitle}
          autoFocus 
          id="title" 
          label="Title" 
          placeholder="Event title"
          isRequired
        />
        <Input
          value={date}
          onChange={onChangeDate}
          id="date" 
          label="Date of the event" 
          placeholder="Event description" 
          type="date" 
        />
        
        <Styled.Label>Host</Styled.Label>
        <Dropdown options={hostList} selectedOption={host} onSelect={setHost} />
      </Styled.FormContainer>

      <Styled.ButtonsContainer>
        <Button onClick={handleBackClick}>Back</Button>
        <Button onClick={handleCreateNewEvent}>Confirm</Button>
      </Styled.ButtonsContainer>

    </Styled.Container>
  )
}
