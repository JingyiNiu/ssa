import {
  Typography,
  Paper,
  Box,
  Button,
} from "@mui/material";

export default function AccountStatusPage() {
  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Account status
      </Typography>
      <Paper variant="outlined" sx={{ p: 3, borderRadius: 1 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Account status
          </Typography>
          <Typography>Active</Typography>
        </Box>
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Member since
          </Typography>
          <Typography>January 2024</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Delete account
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Permanently delete your account and all associated data. This action cannot be undone.
          </Typography>
          <Button variant="outlined" color="error" size="small">
            Delete account
          </Button>
        </Box>
      </Paper>
    </>
  );
}
