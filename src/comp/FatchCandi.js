import React from "react";
import { useEffect, useState } from "react";

function FatchCandi({ contract, account, provider }) {
  const [candidates, setCandidate] = useState([]);
  console.log("Set Comp");

  useEffect(() => {
    const Fatch = async () => {
      const info = await contract.getCandidate();
      console.log(info);
      setCandidate(info);
    };
    contract && Fatch();
  }, [contract]);

  return (
    <div>
      <p className="text-dark h3">Candidates</p>
      <ul>
        <li>Id: 1 , Address: 0x26A93d3BCE2adC0fBDB6A73F5c70b486685fE6c9</li>
        <li>Id: 2 , Address: 0x7b198211D9A2D110dbE980C48547FaDaC3213f2B</li>
        <li>Id: 3 , Address: 0x4b6B3944B9BB5E61519e571C1dF8470a3BbAd854</li>
      </ul>
      {candidates.map((candidate) => {
        return (
          <div key={Math.random()}>
            <div>
              <table>
                <tbody>
                  <tr>
                    <td className="p-2">Candidate Name {candidate.name}</td>

                    <td className="p-2">
                      {" "}
                      Candidate Address {candidate._CandidateAddress}
                    </td>

                    <td className="p-2"> Voted {candidate.vote.toString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FatchCandi;
