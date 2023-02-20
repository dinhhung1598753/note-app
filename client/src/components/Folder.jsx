import { CardActionArea, Card, Typography, CardContent } from "@mui/material";

export default function Folder({ name, selected, changeFolder }) {
  const bgColorStyle = selected ? { backgroundColor: "#d0d288" } : {};

  return (
    <Card
      sx={{ maxWidth: 345, marginBottom: "5px", ...bgColorStyle }}
      onClick={changeFolder}
    >
      <CardActionArea>
        <CardContent sx={{ padding: "10px" }}>
          <Typography variant="body1" color="text.secondary">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
