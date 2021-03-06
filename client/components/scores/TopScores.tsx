import * as React from 'react';
import ScoreRow from './ScoreRow';
import { UserScore } from '../../App';
const { useState, useEffect } = React;
// import styles from './TopScores.scss';

type TopScoresProps = {
  scores: UserScore[],
  mode: string
}

export default function TopScores({ scores, mode }: TopScoresProps) {
  const scoreRows = scores.map((score) => <ScoreRow {...score} key={`Score_${score.score_id}`} />);

  return (
  <section className="scores">
    <h2>Top Scores: {mode}</h2>
    <table>
      <thead><tr>
        <th>Player</th>
        <th>Time</th>
        <th>Date</th>
        </tr></thead>
      <tbody>{scoreRows}</tbody>
    </table>
  </section>
  );
}