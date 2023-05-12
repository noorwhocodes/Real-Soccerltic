/* eslint-disable react/prop-types */
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonBadge from "components/ArgonBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Author({ image, name, email }) {
  return (
    <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
      <ArgonBox mr={2}>
        <ArgonAvatar src={image} alt={name} size="sm" variant="rounded" />
      </ArgonBox>
      <ArgonBox display="flex" flexDirection="column">
        <ArgonTypography variant="button" fontWeight="medium">
          {name}
        </ArgonTypography>
        <ArgonTypography variant="caption" color="secondary">
          {email}
        </ArgonTypography>
      </ArgonBox>
    </ArgonBox>
  );
}

function Function({ job, org }) {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <ArgonTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </ArgonTypography>
      <ArgonTypography variant="caption" color="secondary">
        {org}
      </ArgonTypography>
    </ArgonBox>
  );
}

const playersTableData = {
  columns: [
    { name: "player", align: "left" },
    { name: "team", align: "left" },
    { name: "status", align: "center" },
    //{ name: "employed", align: "center" },
    //{ name: "action", align: "center" },
  ],

  rows: [
    {
      player: <Author image={team2} name="Cristiano Ronaldo" email="Cr7@gmail.com" />,
      team: <Function job="Attacker" org="Manchester United" />,
      status: (
        <ArgonBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),

      action: (
        <ArgonTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </ArgonTypography>
      ),
    },
    {
      player: <Author image={team3} name="Lional Messi" email="lm7@gmail.com" />,
      team: <Function job="Attacker" org="Barcelona" />,
      status: (
        <ArgonBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
      ),

      action: (
        <ArgonTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </ArgonTypography>
      ),
    },
    {
      player: <Author image={team4} name="Kylian Mbappé" email="km10@gmail.com" />,
      team: <Function job="Attacker" org="Paris" />,
      status: (
        <ArgonBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),

      action: (
        <ArgonTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </ArgonTypography>
      ),
    },
    {
      player: <Author image={team3} name="Neymar" email="nm7@gmail.com" />,
      team: <Function job="Attacker" org="Paris" />,
      status: (
        <ArgonBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),

      action: (
        <ArgonTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </ArgonTypography>
      ),
    },
    {
      player: <Author image={team2} name="Mohamed Salah" email="m_salah07@gmail.com" />,
      team: <Function job="MidFielder" org="Liverpool" />,
      status: (
        <ArgonBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
      ),

      action: (
        <ArgonTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </ArgonTypography>
      ),
    },
    {
      player: <Author image={team4} name="Luis Suaraz" email="ls07@gmail.com" />,
      team: <Function job="MidFielder" org="PSG" />,
      status: (
        <ArgonBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
      ),

      action: (
        <ArgonTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </ArgonTypography>
      ),
    },
  ],
};

export default playersTableData;
