import { applyDecorators, UseGuards } from '@nestjs/common';

import { ValidRoles } from '../enums';
import { RoleProtected } from '.';
import { AccessTokenGuard, UserRoleGuard } from '../guards';

export const Auth = (...roles: ValidRoles[]) => {
  return applyDecorators(
    RoleProtected(...roles),
    UseGuards(AccessTokenGuard, UserRoleGuard),
  );
};
