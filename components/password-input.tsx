"use client";

import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Input, type InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface PasswordInputProps extends Omit<InputProps, "type"> {
  showStrengthIndicator?: boolean;
}

const strengthVariants = {
  0: { styles: "", verdict: "" },
  1: { styles: "transition-all focus-visible:ring-red-500", verdict: "Weak" },
  2: {
    styles: "transition-all focus-visible:ring-orange-500",
    verdict: "Fair",
  },
  3: { styles: "transition-all focus-visible:ring-amber-500", verdict: "Good" },
  4: {
    styles: "transition-all focus-visible:ring-emerald-500",
    verdict: "Strong",
  },
};

function getPasswordStrength(password: string) {
  if (!password) return 0;

  const criteria = [
    /(?=.*\d)/, // Contains at least one number
    /(?=.*[a-z])/, // Contains at least one lowercase
    /(?=.*[A-Z])/, // Contains at least one uppercase
    /(?=.*[!@#$%^&*(),.?":{}|<>])/, // Contains at least one special character
  ];

  return criteria.reduce(
    (strength, regex) => strength + (regex.test(password) ? 1 : 0),
    0
  );
}

export function PasswordInput({
  className,
  showStrengthIndicator = true,
  value = "",
  ...props
}: PasswordInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function handlePasswordVisibilityToggle(
    e: React.MouseEvent<HTMLButtonElement>
  ) {
    e.preventDefault();
    setIsPasswordVisible((prev) => !prev);
  }

  const passwordStrength = useMemo(() => {
    const score = getPasswordStrength(value?.toString() ?? "");
    return strengthVariants[score as keyof typeof strengthVariants];
  }, [value]);

  return (
    <FormItem className="w-full">
      <FormLabel className="flex flex-row items-center justify-between">
        <div className="flex gap-0.5">Password</div>

        {showStrengthIndicator && (
          <motion.div
            key={passwordStrength.verdict}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="text-muted-foreground h-4 text-xs"
          >
            {passwordStrength.verdict}
          </motion.div>
        )}
      </FormLabel>

      <FormControl>
        <div className="relative">
          <Input
            className={cn(
              "duration-350 pe-9 font-mono",
              passwordStrength.styles,
              className
            )}
            type={isPasswordVisible ? "text" : "password"}
            {...props}
          />

          <Button
            className="text-muted-foreground absolute inset-y-0 end-0"
            onClick={handlePasswordVisibilityToggle}
            aria-hidden="true"
            variant="link"
            tabIndex={-1}
            type="button"
            size="icon"
          >
            {isPasswordVisible ? (
              <EyeOff className="size-4" strokeWidth={2} />
            ) : (
              <Eye className="size-4" strokeWidth={2} />
            )}
          </Button>
        </div>
      </FormControl>
    </FormItem>
  );
}
