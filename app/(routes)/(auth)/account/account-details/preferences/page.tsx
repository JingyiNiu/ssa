"use client";

import {
  Typography,
  Paper,
  TextField,
  FormControlLabel,
  Switch,
  Stack,
} from "@mui/material";
import { FormSubmitButton } from "@/app/components/common/FormSubmitButton";

const MOCK_PREFS = {
  language: "en",
  timezone: "America/New_York",
  emailNotifications: true,
  marketingEmails: false,
};

export default function PreferencesPage() {
  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Preferences
      </Typography>
      <Paper variant="outlined" sx={{ p: 3, borderRadius: 1 }}>
        <Stack spacing={3} component="form" onSubmit={(e) => e.preventDefault()}>
          <TextField
            select
            label="Language"
            value={MOCK_PREFS.language}
            size="small"
            sx={{ maxWidth: 200 }}
            SelectProps={{ native: true }}
          >
            <option value="en">English</option>
            <option value="zh">中文</option>
          </TextField>
          <TextField
            select
            label="Timezone"
            value={MOCK_PREFS.timezone}
            size="small"
            fullWidth
            SelectProps={{ native: true }}
          >
            <option value="America/New_York">Eastern Time</option>
            <option value="America/Los_Angeles">Pacific Time</option>
            <option value="Asia/Shanghai">China Standard Time</option>
          </TextField>
          <FormControlLabel
            control={<Switch defaultChecked={MOCK_PREFS.emailNotifications} />}
            label="Order and account email notifications"
          />
          <FormControlLabel
            control={<Switch defaultChecked={MOCK_PREFS.marketingEmails} />}
            label="Marketing emails"
          />
          <FormSubmitButton>Save preferences</FormSubmitButton>
        </Stack>
      </Paper>
    </>
  );
}
