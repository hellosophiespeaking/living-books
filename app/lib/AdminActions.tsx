'use client'
import { supabase } from './supabase'

export default function AdminActions({ bookId, onAction }: { bookId: string, onAction: () => Promise<void> }) {
  async function approve() {
    await supabase.from('books').update({ status: 'approved' }).eq('id', bookId)
    await onAction()
  }

  async function reject() {
    await supabase.from('books').update({ status: 'rejected' }).eq('id', bookId)
    await onAction()
  }

  return (
    <div style={{display: 'flex', gap: '12px'}}>
      <button
        onClick={approve}
        style={{backgroundColor: '#533021', color: '#FAF6EE', padding: '10px 20px', fontFamily: 'Toren', fontSize: '13px', border: 'none', cursor: 'pointer', letterSpacing: '0.05em'}}
      >
        Approve
      </button>
      <button
        onClick={reject}
        style={{backgroundColor: 'transparent', color: '#8D3F2F', padding: '10px 20px', fontFamily: 'Toren', fontSize: '13px', border: '1px solid #8D3F2F', cursor: 'pointer', letterSpacing: '0.05em'}}
      >
        Reject
      </button>
    </div>
  )
}