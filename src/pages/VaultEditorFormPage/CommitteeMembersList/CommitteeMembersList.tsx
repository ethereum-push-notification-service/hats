import React from "react";
import { ICommitteeMember } from "types/types";
import CommitteeMemberForm from "./CommitteeMemberForm/CommitteeMemberForm";

type CommmitteeMembersProps = {
  members: ICommitteeMember[];
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onRemove: (index: number) => void;
  addMember: () => void;
};

export function CommitteeMembersList({ members, onChange, onRemove, addMember }: CommmitteeMembersProps) {
  return (
    <>
      {members.map((member, index) => (
        <CommitteeMemberForm
          key={index}
          member={member}
          index={index}
          membersCount={members.length}
          onChange={onChange}
          onRemove={onRemove}
          addMember={addMember}
        />
      ))}
    </>
  );
}
