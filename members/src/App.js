import React, { useEffect, useState } from 'react';
import './App.css';
import queryString from 'query-string'

export default function App(props) {
  const query = queryString.parse(window.location.search)
  const [members, setMembers] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch(`https://raw.githubusercontent.com/tikv/community/master/sig/${query.name}/membership.json`)
      const body = await resp.json()
      setMembers(body)
    }
    fetchData()
  }, [query.name])

  if (members == null) return null

  return (
    <div className="App">
      <h1>{members.name}</h1>
      
      <MemberGroup group="Tech Leaders" members={members.techLeaders} />
      <MemberGroup group="Committers" members={members.committers} />
      <MemberGroup group="Reviewers" members={members.reviewers} />
      <MemberGroup group="Active contributors"members={members.activeContributors} />
    </div>
  );
}

function MemberGroup(props) {
  return (
    <div key={props.group}>
      <h2>{props.group}</h2>
      <ul>
        {props.members.map((member) => <li key={member.githubName}>{member.githubName}</li>)}
      </ul>
    </div>
  )
}