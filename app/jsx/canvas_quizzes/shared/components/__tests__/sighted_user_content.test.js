/*
 * Copyright (C) 2021 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import {act, render, fireEvent} from '@testing-library/react'
import React from 'react'
import SightedUserContent from '../sighted_user_content'
import assertChange from 'chai-assert-change'

describe('canvas_quizzes/components/sighted_user_content', () => {
  it('renders', () => {
    render(<SightedUserContent>yea!</SightedUserContent>)
    expect(document.body.textContent).toMatch('yea!')
  })
})