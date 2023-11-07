// pages/api/auth.js
import { supabase } from '../../utils/supabaseClient'

export default function handler(req, res) {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  if (!user) {
    // If no user, redirect to index
    return res.status(401).send('Unauthorized')
  }

  // If there is a user, return it
  return res.status(200).json({ user })
}
