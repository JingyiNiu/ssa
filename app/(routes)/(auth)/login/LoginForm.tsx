import {
  Box,
  Typography,
  TextField,
  Link as MuiLink,
  Divider,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ActionButton } from "@/app/components/ui/ActionButton";
import Link from "next/link";

interface LoginFormProps {
  handleSubmit: (e: React.FormEvent) => void;
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
  showPassword: boolean;
  setShowPassword: (showPassword: boolean) => void;
  loading: boolean;
  error?: string;
}

const LoginForm = ({
  handleSubmit,
  username,
  setUsername,
  password,
  setPassword,
  showPassword,
  setShowPassword,
  loading,
  error,
}: LoginFormProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 450,
        bgcolor: "white",
        borderRadius: 2,
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        overflow: "hidden",
      }}
      data-testid="login-form"
    >
      {/* 头部 */}
      <Box
        sx={{
          pt: 3,
          pb: 2,
          px: 4,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "text.primary",
            textAlign: "center",
          }}
        >
          Login to your account
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            textAlign: "center",
            mt: 1,
          }}
        >
          Great to have you back!
        </Typography>
      </Box>

      {/* 表单内容 */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: 4,
        }}
      >
        {/* 邮箱 */}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              mb: 1,
              color: "text.primary",
            }}
          >
            Email address
          </Typography>
          <TextField
            fullWidth
            type="email"
            placeholder="Enter your email address"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                bgcolor: "grey.50",
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                },
              },
            }}
          />
        </Box>

        {/* 密码 */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              mb: 1,
              color: "text.primary",
            }}
          >
            Password
          </Typography>
          <TextField
            fullWidth
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                    sx={{
                      color: "text.secondary",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                bgcolor: "grey.50",
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                },
              },
            }}
          />
        </Box>

        {/* 错误提示 */}
        {error && (
          <Box
            sx={{
              mb: 3,
              p: 2,
              bgcolor: "error.light",
              borderRadius: 1,
              border: "1px solid",
              borderColor: "error.main",
            }}
          >
            <Typography variant="body2" sx={{ color: "error.dark" }}>
              {error}
            </Typography>
          </Box>
        )}

        {/* 登录按钮 */}
        <ActionButton
          type="submit"
          fullWidth
          loading={loading}
          sx={{
            py: 1.5,
            fontSize: "1rem",
          }}
        >
          Login
        </ActionButton>

        <Divider sx={{ my: 3 }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Or
          </Typography>
        </Divider>

        {/* 注册链接 */}
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
            }}
          >
            Don't have an account?{" "}
            <MuiLink
              component={Link}
              href="/register"
              sx={{
                color: "primary.main",
                fontWeight: 600,
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Register now
            </MuiLink>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
