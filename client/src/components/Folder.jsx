import { CardActionArea, Card, Typography, CardContent } from "@mui/material";

export default function Note({ name }) {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: "5px" }}>
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
