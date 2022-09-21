import { applyDecorators, UseGuards } from '@nestjs/common';

import { ValidRoles } from '../enums';
import { RoleProtected } from '.';
import { RefreshTokenGuard, UserRoleGuard } from '../guards';

export const AuthRefresh = (...roles: ValidRoles[]) => {
  return applyDecorators(
    RoleProtected(...roles),
    UseGuards(RefreshTokenGuard, UserRoleGuard),
  );
};
