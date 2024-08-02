/*import styles from "./Team.module.css";
import line from "./assets/line.png";
import line2 from "./assets/line2.png";
import data from "../../../data.json"

const Team = () => {
    return (
        <div className={styles.teamWrapper} id="team">
            <h1>Our Team</h1>
            <div className={styles.teamBodyWrapper}>
                <div className={styles.teamBgLineWrapper}>
                    <img src={line} alt="" loading="lazy" />
                    <img src={line2} alt="" loading="lazy" />
                    <img src={line} alt="" loading="lazy" />
                    <img src={line2} alt="" loading="lazy" />
                </div>
                <div className={styles.teamMembersDetailsWrapper}>
                    <div className={`${styles.team} ${styles.team1}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.staffAdvisor.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.staffAdvisor.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Staff Advisor
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team2}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.campusLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.campusLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Campus Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team3}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.campusCoLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.campusCoLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Campus Co-Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team4}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.treasurer.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.treasurer.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Treasurer
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team5}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.technicalLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.technicalLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Technical Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team6}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.mediaLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.mediaLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Media Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team7}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.contentLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.contentLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Content Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team8}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.operationLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.operationLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Operation Lead
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;*/
import { useState } from "react";

import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Teams.module.css";
import TeamCard from "../../Components/TeamCard/TeamCard";

import yipteam from "./data/yip-team";
import techTeam from "./data/tech-contributors.js";

const Teams = () => {
  const [teamName, setTeamfilter] = useState("all");

  let execom = require("./teamdata/execom.json");
  let core = require("./teamdata/core.json");
  let zonal = require("./teamdata/zonal.json");
  let district = require("./teamdata/district.json");
  let ca = require("./teamdata/ca.json");
  let pillars = require("./2023/pillars.json");
  let pillarsQ1 = require("./2023/pillarsQ1.json");
  let mulearnhq = require("./2023/mulearnhq.json");
  let communityteam = require("./2023/communityteam.json");
  let associates = require("./2023/associates.json");
  let enablerhq = require("./2023/enablerhq.json");

  const handleFilterChange = (e) => {
    setTeamfilter(e.target.value);
  };
  return (
    <>
      <Navbar />
      <div className={styles.firstviewmain_container}>
        <div className={styles.firstview_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                The <span>Gears</span> Behind The Machine.
              </p>
              <p className={styles.fv_tagline}>
                The 'µLearn' community's growth to this moment would not have
                been possible without the team's soul and heart. Our team has a
                big impact on how well we do our work. Here is the team to which
                we are addressing.
              </p>
            </div>
            <div className={styles.fv_illustration}>
              <img
                className={styles.fv_image}
                src="assets/team/illustration.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.select_wrapper}>
        <select
          className={styles.select}
          value={teamName}
          onChange={handleFilterChange}
        >
          <option value="all" selected>
            All
          </option>
          <optgroup label="2023">
            <option value="execom">Execom</option>
            <option value="mulearnhq">µLearn HQ</option>
            <option value="associates">Associates</option>
            <option value="enablershq">Enablers HQ</option>
            <option value="mulearnpillar3">µLearn Pillars Q3</option>
            <option value="mulearnpillar1">µLearn Pillars Q1</option>
            <option value="communityteam">Community Team</option>
          </optgroup>
          <optgroup label="2022">
            <option value="yip">YIP Team</option>
            <option value="community">Community Team</option>
            <option value="tech">Tech Team</option>
          </optgroup>
        </select>
      </div>

      {(teamName === "all" || teamName === "execom") && (
        <section id={styles.execom} className={styles.team_group}>
          <p className={styles.team_title}>Executive Committee</p>
          <p className={styles.team_desc}>
            The Executive Members are those who serve as the community's
            skeleton and propel it forward from the rear.
          </p>
          <div className={styles.members_list}>
            {execom.map((member) => {
              return (
                <TeamCard
                  name={member.name}
                  designation={member.position}
                  image={member.image}
                  linkedIn={member.linkedin ? member.linkedin : ""}
                />
              );
            })}
          </div>
        </section>
      )}

      {(teamName === "all" || teamName === "mulearnhq") && (
        <section id={styles.execom} className={styles.team_group}>
          <p className={styles.team_title}>µLearn HQ</p>
          <p className={styles.team_desc}>
            The HQ members are the ones who are the backbone of the community.
            They are the ones who are responsible for the smooth functioning of
            different teams and the community as a whole.
          </p>
          <div className={styles.members_list}>
            {mulearnhq.map((member) => {
              return (
                <TeamCard
                  name={member.name}
                  designation={member.position}
                  image={member.image}
                  linkedIn={member.linkedin ? member.linkedin : ""}
                  twitter={member.twitter ? member.twitter : ""}
                  github={member.github ? member.github : ""}
                />
              );
            })}
          </div>
        </section>
      )}

      {(teamName === "all" || teamName === "associates") && (
        <section id={styles.execom} className={styles.team_group}>
          <p className={styles.team_title}>µLearn Associates</p>
          <p className={styles.team_desc}></p>
          <div className={styles.members_list}>
            {associates.map((member) => {
              return (
                <TeamCard
                  name={member.name}
                  designation={member.position}
                  image={member.image}
                  linkedIn={member.linkedin ? member.linkedin : ""}
                  twitter={member.twitter ? member.twitter : ""}
                  github={member.github ? member.github : ""}
                />
              );
            })}
          </div>
        </section>
      )}

      {(teamName === "all" || teamName === "enablerhq") && (
        <section id={styles.execom} className={styles.team_group}>
          <p className={styles.team_title}>Enablers HQ</p>
          <p className={styles.team_desc}></p>
          <div className={styles.members_list}>
            {enablerhq.map((member) => {
              return (
                <TeamCard
                  name={member.name}
                  designation={member.position}
                  image={member.image}
                />
              );
            })}
          </div>
        </section>
      )}

      {(teamName === "all" || teamName === "mulearnpillar3") && (
        <section id={styles.execom} className={styles.team_group}>
          <p className={styles.team_title}>µLearn Pillars Q3</p>
          <p className={styles.team_desc}>
            The Pillars of µLearn are the ones who support the µLearn Community.
            They are a group of students who assist the peers with their work
            and help the community thrive.
          </p>
          <div className={styles.members_list}>
            {pillars.map((member) => {
              return (
                <TeamCard
                  name={member.name}
                  designation={member.team}
                  image={
                    member.image
                      ? member.image
                      : `assets/team/pillarsq3/${member.name}.webp`
                  }
                  linkedIn={member.linkedin ? member.linkedin : ""}
                  github={member.github ? member.github : ""}
                  twitter={member.twitter ? member.twitter : ""}
                  muid={member.muid ? member.muid : ""}
                  leadDesignation={member.lead ? member.lead : ""}
                />
              );
            })}
          </div>
        </section>
      )}
      {teamName === "mulearnpillar1" && (
        <section id={styles.execom} className={styles.team_group}>
          <p className={styles.team_title}>µLearn Pillars Q1</p>
          <p className={styles.team_desc}>
            The Pillars of µLearn are the ones who support the µLearn Community.
            They are a group of students who assist the peers with their work
            and help the community thrive.
          </p>
          <div className={styles.members_list}>
            {pillarsQ1.map((member) => {
              return (
                <TeamCard
                  name={member.name}
                  designation={member.team}
                  image={member.image}
                  linkedIn={member.linkedin ? member.linkedin : ""}
                  github={member.github ? member.github : ""}
                  twitter={member.twitter ? member.twitter : ""}
                  muid={member.muid ? member.muid : ""}
                  leadDesignation={member.lead}
                />
              );
            })}
          </div>
        </section>
      )}
      {(teamName === "all" || teamName === "communityteam") && (
        <section id={styles.execom} className={styles.team_group}>
          <p className={styles.team_title}>Community Contributors</p>
          <div className={styles.members_list}>
            {communityteam.map((member) => {
              return (
                <TeamCard
                  name={member.name}
                  designation={member.position}
                  image={member.image}
                  linkedIn={member.linkedin ? member.linkedin : ""}
                />
              );
            })}
          </div>
        </section>
      )}

      {teamName === "yip" && (
        <section className={styles.team_group}>
          <p className={styles.team_title}>YIP Organization Team</p>
          <p className={styles.team_desc}>
            Here are the members of the crew and interns who helped to make the
            YIP a big success.
          </p>
          <div className={styles.members_list}>
            {yipteam.map((member) => {
              return (
                <TeamCard
                  name={member.name}
                  designation={member.designation}
                  image={`/assets/team/yip-team/${member.name}.webp`}
                  linkedIn={member.linkedin ? member.linkedin : ""}
                />
              );
            })}
          </div>
        </section>
      )}

      {teamName === "community" && (
        <section className={styles.team_group}>
          <p className={styles.team_title}>Community Team</p>
          <p className={styles.team_desc}>
            The Community Team was the one who brought the achievements at the
            most; it links industry and academia and forges connections between
            students, faculty, mentors, and others.
          </p>
          <p className={styles.sub_team_title}>Core Team</p>
          <div className={styles.members_list}>
            {core.map((member) => {
              return (
                <TeamCard
                  name={member.name}
                  designation={member.designation}
                  image={member.image}
                />
              );
            })}
          </div>
          <p className={styles.sub_team_title}>Zonal Heads</p>
          <div className={styles.members_list}>
            {zonal.map((member) => {
              return (
                <TeamCard
                  name={member.name}
                  designation={member.designation}
                  image={member.image}
                />
              );
            })}
          </div>
          <p className={styles.sub_team_title}>District Heads</p>
          <div className={styles.members_list}>
            {district.map((member) => {
              return (
                <TeamCard
                  name={member.name}
                  designation={member.designation}
                  image={member.image}
                />
              );
            })}
          </div>
          <p className={styles.sub_team_title}>Campus Ambassadors</p>
          <div className={styles.members_list}>
            {ca.map((member) => {
              return (
                <TeamCard
                  name={member.name}
                  designation={member.designation}
                  image={member.image}
                />
              );
            })}
          </div>
        </section>
      )}

      {teamName === "tech" && (
        <section className={styles.team_group}>
          <p className={styles.team_title}>Tech Team</p>
          <p className={styles.team_desc}>
            Here are the members of the crew who contributed to developing the
            website and bot, collected resources and gave suggestions about UX.
          </p>
          <div className={styles.members_list}>
            {techTeam.map((member) => {
              return (
                <TeamCard
                  name={member.name}
                  image={`/assets/team/tech-contributors/${member.name}.webp`}
                  designation={member.team ? member.team : ""}
                  linkedIn={member.linkedin ? member.linkedin : ""}
                />
              );
            })}
          </div>
        </section>
      )}

      <Footer />
    </>
  );
};

export default Teams;