import React from "react";
import { People } from "../domain/people";
import { useStore } from "../reactive/reactive";

interface PeopleCardProps {
  peopleProps: People;
  onPeopleSelect: (name: string) => void;
}
export function PeopleCard({ peopleProps, onPeopleSelect }: PeopleCardProps) {
  const [, setSelected] = useStore("selected");

  const handlePeopleSelect = () => {
    onPeopleSelect(peopleProps.name);
    setSelected(peopleProps.name);
  };

  return <button onClick={handlePeopleSelect}>{peopleProps.name}</button>;
}
