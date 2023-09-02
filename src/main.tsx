/**
 * @license AGPL-3.0-only
 * Todo List - A Complex Todo List with Projects
 * Copyright (C) 2023 Eldar Pashazade <eldarlrd@pm.me>
 *
 * This file is part of Todo List.
 *
 * Todo List is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, version 3.
 *
 * Todo List is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Todo List. If not, see <https://www.gnu.org/licenses/>.
 */

import { render } from 'preact';
import install from '@twind/with-react';

import config from '../twind.config.mts';

import { App } from '@/app.tsx';

install(config, import.meta.env.PROD);
render(<App />, document.body);
