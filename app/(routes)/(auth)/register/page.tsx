"use client";

import {
  Box,
  Typography,
  TextField,
  Link as MuiLink,
  Divider,
  IconButton,
  InputAdornment,
  MenuItem,
  Alert,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ActionButton } from "@/app/components/ui/ActionButton";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { stores } from "@/app/components/layout/find-a-dealer/dealers";

// 从 stores 数据生成分店选项
const branches = [
  { value: "", label: "Please select branch" },
  ...stores.map((store) => ({
    value: store.name,
    label: store.name,
  })),
];

const RegisterPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // 表单状态
  const [formData, setFormData] = useState({
    branch: "",
    companyLegalName: "",
    companyTradingName: "",
    incorporationNumber: "",
    fullName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    passwordMismatch: false,
  });

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));

      // 清除密码不匹配错误
      if (field === "password" || field === "confirmPassword") {
        setErrors((prev) => ({ ...prev, passwordMismatch: false }));
      }
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 验证密码匹配
    if (formData.password !== formData.confirmPassword) {
      setErrors({ passwordMismatch: true });
      return;
    }

    setLoading(true);

    // 模拟注册逻辑
    setTimeout(() => {
      router.push("/account");
      setLoading(false);
    }, 1500);
  };

  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      bgcolor: "grey.50",
      "&:hover fieldset": {
        borderColor: "primary.main",
      },
      "&.Mui-focused fieldset": {
        borderColor: "primary.main",
      },
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        py: 4,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 600,
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
          overflow: "hidden",
        }}
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
            Register Company Account
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              textAlign: "center",
              mt: 1,
            }}
          >
            Create your wholesale account
          </Typography>
        </Box>

        {/* 提示信息 */}
        <Box sx={{ px: 4, mb: 2 }}>
          <Alert severity="info" sx={{ fontSize: "0.875rem" }}>
            <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
              Please note:
            </Typography>
            <Typography variant="body2">
              We are a wholesaler of wheels and tyres, so this form is for
              Companies Use Only. Purchase of less than $1000 a month will
              likely be denied. Thank you for your cooperation.
            </Typography>
          </Alert>
        </Box>

        {/* 表单内容 */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            px: 4,
            pb: 4,
          }}
        >
          {/* Branch */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                mb: 1,
                color: "text.primary",
              }}
            >
              Branch <span style={{ color: "#d32f2f" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              select
              value={formData.branch}
              onChange={handleChange("branch")}
              required
              sx={inputStyle}
            >
              {branches.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          {/* Company Legal Name */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                mb: 1,
                color: "text.primary",
              }}
            >
              Company Legal Name <span style={{ color: "#d32f2f" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter your company legal name"
              value={formData.companyLegalName}
              onChange={handleChange("companyLegalName")}
              required
              sx={inputStyle}
            />
          </Box>

          {/* Incorporation Number */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                mb: 1,
                color: "text.primary",
              }}
            >
              Incorporation Number
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter your incorporation number"
              value={formData.incorporationNumber}
              onChange={handleChange("incorporationNumber")}
              sx={inputStyle}
            />
          </Box>

          {/* Full Name */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                mb: 1,
                color: "text.primary",
              }}
            >
              Full Name <span style={{ color: "#d32f2f" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange("fullName")}
              required
              sx={inputStyle}
            />
          </Box>

          {/* Email */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                mb: 1,
                color: "text.primary",
              }}
            >
              Email <span style={{ color: "#d32f2f" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange("email")}
              required
              helperText="This will be used for your login"
              sx={inputStyle}
            />
          </Box>

          {/* Phone */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                mb: 1,
                color: "text.primary",
              }}
            >
              Phone <span style={{ color: "#d32f2f" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange("phone")}
              required
              sx={inputStyle}
            />
          </Box>

          {/* Address */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                mb: 1,
                color: "text.primary",
              }}
            >
              Address <span style={{ color: "#d32f2f" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder="Enter your company address"
              value={formData.address}
              onChange={handleChange("address")}
              required
              sx={inputStyle}
            />
          </Box>

          {/* Password */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                mb: 1,
                color: "text.primary",
              }}
            >
              Password <span style={{ color: "#d32f2f" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange("password")}
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
              sx={inputStyle}
            />
          </Box>

          {/* Confirm Password */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                mb: 1,
                color: "text.primary",
              }}
            >
              Confirm Password <span style={{ color: "#d32f2f" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter your password"
              value={formData.confirmPassword}
              onChange={handleChange("confirmPassword")}
              required
              error={errors.passwordMismatch}
              helperText={
                errors.passwordMismatch ? "Passwords do not match" : ""
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                      sx={{
                        color: "text.secondary",
                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={inputStyle}
            />
          </Box>

          {/* Register Button */}
          <ActionButton
            type="submit"
            fullWidth
            loading={loading}
            sx={{
              py: 1.5,
              fontSize: "1rem",
              mt: 2,
            }}
          >
            Register
          </ActionButton>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Or
            </Typography>
          </Divider>

          {/* Login Link */}
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
              }}
            >
              Already have an account?{" "}
              <MuiLink
                component={Link}
                href="/login"
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Login now
              </MuiLink>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterPage;
