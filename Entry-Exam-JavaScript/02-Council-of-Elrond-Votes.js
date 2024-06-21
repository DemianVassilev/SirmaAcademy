function councilVote(votes) {

    let yesVotes = 0;
    let noVotes = 0;
    let abstainVotes = 0;
    let decisionOfTheCouncil = '';

    for (let vote of votes) {
        switch (vote) {
            case 'Yes': yesVotes++; break;
            case 'No': noVotes++; break;
            case 'Abstain': abstainVotes++; break;
        }
    }

    if (yesVotes > noVotes) {
        decisionOfTheCouncil = 'Yes';
    } else if (noVotes > yesVotes) {
        decisionOfTheCouncil = 'No';
    } else if (yesVotes === 0 && noVotes === 0 && abstainVotes > 0) {
        decisionOfTheCouncil = 'Abstain';
    } else if (yesVotes === noVotes) {
        decisionOfTheCouncil = 'Tie';
    }

    console.log(decisionOfTheCouncil);

}

councilVote(['Yes', 'No', 'Yes', 'Abstain', 'Yes']);                // Yes
councilVote(['No', 'No', 'Yes']);                                   // No
councilVote(['Yes', 'No']);                                         // Tie
councilVote(['Abstain']);                                           // Abstain
councilVote(['No', 'No', 'Abstain', 'Abstain', 'Yes', 'Yes']);      // Tie
councilVote(['No', 'Abstain', 'Abstain']);                          // No