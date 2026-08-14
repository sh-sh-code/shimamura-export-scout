DELETE FROM drafts
WHERE candidate_id IN (
  SELECT id FROM candidates
  WHERE status = 'demo' OR source_url LIKE '%#demo-%'
);
--> statement-breakpoint
DELETE FROM candidates
WHERE status = 'demo' OR source_url LIKE '%#demo-%';
